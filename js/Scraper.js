var request = require('request');
var cheerio = require('cheerio');
//var express = require('express');

function Scrape()
{
    request('http://www.thirstproject.org/category/media/', function (error, response, html) 
        {
            if (!error && response.statusCode == 200) 
                {
                    var $ = cheerio.load(html);
                    $('div.post').each(function(i, element)
                        {
                            var a = $(this).prev();
                            console.log(a.text());
         alert('HEllo');
                        });
                }
        });  
}