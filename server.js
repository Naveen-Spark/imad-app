var express = require('express');
var morgan = require('morgan');
var path = require('path');

var article1 = {
    
    title: 'Article 1 | Positive Boy',
    heading: 'B cool nd free Always :)',
    content: 
           `<p>
           
            Positive thinking is a mental and emotional attitude that focuses on the bright side of life and expects positive results.A positive person anticipates happiness, health and success, and believes he or she can overcome any obstacle and difficulty.
           </p>`
         };
         
 var article2 = {
    
    title: 'Article 2 | Positive Tips ',
    heading: 'B cool nd free Always :)',
    content: 
           `
            <ol>
         <li>Only use positive words when talking. ...</li>
         <li>Push out all feelings that aren't positive. ...</li>
         <li>Use words that evoke strength and success. ...</li>
         <li> Practice positive affirmation. ...</li>
         <li>Direct your thoughts. ...</li>
         <li>Believe you will succeed. ...</li>
         <li>Analyze what went wrong.</li>
        </ol>
           
           `
         };        
         
var article3 = {
    title: 'Article 3 | Positive Attitude ',
    heading: 'B cool nd free Always :)',
    content: 
          `
        <ol>
         <li>Keep a gratitude journal. ...</li>
         <li>Reframe your challenges. ...</li>
         <li>Get good at being rejected. ...</li>
         <li>Use positive words to describe your life. ...</li>
         <li>Replace have with get. ...</li>
         <li>Don't let yourself get dragged into other people's complaints. ...</li>
         <li>Breathe.</li>
         <li>Analyze what went wrong.</li>
        </ol>
           
           `
         };    
    
};         

function Template(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate= `
          <!DOCTYPE html>
            <html>
            <head>
                <title>
                   ${title}
                </title>
                <link href="/ui/style.css" rel="stylesheet" />
                
                
            </head>
            
            <body>
                <div class="Can1">
               
                    <h1> ${heading} </h1>
                    
                    <p> ${content} </p>
                  
                    
                </div>
                
                
            </body>
            
            
            </html>
       `; 
       return htmlTemplate;
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function(req,res) {
 res.send(Template(article1));  
});

app.get('/article2', function(req,res) {
 res.send(Template(article2));   
});

app.get('/article3', function(req,res) {
res.send(Template(article3));    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 80; // Use 8080 for local development because you might already have apache running on 80
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
