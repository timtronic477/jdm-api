const express = require('express')
const app = express()
const PORT = 8000

const cars = {
    'toyota' : {
        'supra': {
            'model code': 'A80',
            'years': '1994-1998',
            'engine': '2JZ-GTE',
            'horsepower': 321
        },
        'mr2' : {
            'model code': 'W20',
            'years': '1989-1999',
            'engine': '3S-GTE',
            'horsepower': 242
        }
    },
    'nissan': {
        'skyline': {
            'model code': 'R34',
            'years': '1999-2002',
            'engine': 'RB26DETT',
            'horsepower': 280
        },
        '350z':{
            'model code': 'Z33',
            'years': '2002-2008',
            'engine': 'VQ35DE',
            'horsepower': 302
        }
    },
    'mazda':{
        'rx-7':{
            'model code': 'FD',
            'years': '1991-2002',
            'engine': '13B-REW',
            'horsepower': 255
        }
    },
    'honda': {
        'nsx':{
            'model code': 'NA',
            'years': '1990-2005',
            'engine': 'C30-A',
            'horsepower': 270
        },
        'civic': {
            'model code': 'EK9',
            'years': '1997-2000',
            'engine': 'B16',
            'horsepower': 182
        },
        'integra': {
            'model code': 'DC2',
            'years': '1986-2006',
            'engine': 'B18',
            'horsepower': 190
        }
    },
    'unknown':{
        'model code': 'unknown',
        'years': 'unknown',
        'engine': 'unknown',
        'horsepower': 'unknown'
    }
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:make/:model", (req, res) => {
    const carMake = req.params.make.toLowerCase()
    const model = req.params.model.toLowerCase()
    if ( cars[carMake] && cars[carMake][model]){
        res.json(cars[carMake][model])
    } else {
        res.json(cars['unknown'])
    }

})

app.listen(PORT, (req, res) =>{
    console.log(`Listening on port ${PORT}`)
})
