(ns clojure-noob.core-test
  (:require [clojure.test :refer :all]
            [clojure-noob.core :refer :all]))

(deftest addition
  (testing 6
    (is (+ 1 2 3))))
