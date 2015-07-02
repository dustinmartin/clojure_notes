(ns clojure_notes.core
  (:require [goog.dom :as dom]
            [goog.events :as events]))

(def notes (atom []))

(defn log [value]
  "Log out a value to the browser console after
  converting it to a Javascript data structure"
  (.log js/console (clj->js value)))

(defn add-note [text]
  "Add a new note"
  (reset! notes
    (conj @notes text))
  (log @notes))

(defn remove-note [text]
  "Remove a note by filtering it out and reseting @notes"
  (reset! notes
          (filter (fn [note]
            (not= note text))
          @notes))
  (log @notes))

(defn reset-notes []
  "Remove all notes"
  (reset! notes [])
  (log @notes))

(add-note "foo")
(add-note "bar")
(add-note "baz")

(remove-note "foo")

(reset-notes)
