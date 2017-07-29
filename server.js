var express = require('express');
app = express();

var PORT = process.env.PORT || 8080;

var bodyParser = require('body-parser');
var method = require('method-override');