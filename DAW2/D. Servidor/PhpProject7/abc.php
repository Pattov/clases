<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author dwes
 */
interface a {
    // Métodos
    public function foo();
}

interface b {
    public function bar();
}

interface c extends a, b {
    public function baz();
}
