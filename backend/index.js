const express = require('express');\nconst mongoose = require('mongoose');\nconst bodyParser = require('body-parser');\nconst app = express();\n\napp.use(bodyParser.json());\n\napp.listen(3000, () => {\n    console.log('Server is running on port 3000');\n});
