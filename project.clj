(defproject clojure-notes "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
                 [org.clojure/clojurescript "0.0-3211"]]

  :jvm-opts ["-Xmx1G"] ;; <- Sometimes ClojureScript compilation fails because available
                       ;; JVM heap space it too low. This line gives it more space

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]]

  :figwheel {
    :http-server-root "public"
    :port 3449
    :css-dirs ["resources/public/css"]}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src/clojure_notes" "src/figwheel"]
              :compiler {
                :output-to "resources/public/clojure_notes.js"
                :output-dir "resources/public/out"
                :optimizations :none
                :source-map true}}]})
