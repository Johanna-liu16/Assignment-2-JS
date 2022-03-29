// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a parrallelogram.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-parallelogram').value)
  const height = parseInt(document.getElementById('height-of-parallelogram').value)

  // process
  const area = ( base * height )

  // output
  document.getElementById('answers').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}
