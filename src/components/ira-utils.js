import React, {Component} from 'react';






export function getVersion() {

          return "3.6 +Standard Components with CSS +AppBar menu "

}


export function getStripedStyle(index) {
       //console.log("Index is "+index)
       return {
         background: index % 2 ? '#99a6b2' : 'lightsteelblue'
       };
     }
//
//lightblue


export function formatCurrency (amount) {
            if (!amount) return "$0.00"

            if (amount >= 0) {
               return "$"+amount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            } else {
               return "($"+(-1*amount).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+")";
            }
} //function


export function get_endpoint(type) {
          //let current_ENV = process.env.NODE_ENV;

        let current_ENV = 'production';
      //let current_ENV = 'development';

      if (type == 'API') {

                  if (current_ENV  === 'production')  {
                           return "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"
                  } else {
                           return "http://localhost:8081"
                  }
      }

      if (type == 'image') {

                  if (current_ENV  === 'production')  {
                           return "http://ira-rux-03.s3-website.us-east-2.amazonaws.com"
                  } else {
                           return "http://localhost:8080"
                  }
      }




} //function
