import React, {Component} from 'react';


export function getVersion() {

          return "3.1 adding Google Material UI"

}



export function formatCurrency (amount) {
            if (!amount) return "$0.00"

            if (amount >= 0) {
               return "$"+amount.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            } else {
               return "($"+(-1*amount).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+")";
            }
} //function


export function getAPI_endpoint() {
          //let current_ENV = process.env.NODE_ENV;

        let current_ENV = 'production';
      //let current_ENV = 'development';

        if (current_ENV  === 'production')  {
                 return "http://ira-env.c7z5am6byq.us-east-2.elasticbeanstalk.com"
        } else {
                 return "http://localhost:8081"
        }

} //function
