### To start ###

`npm i`
start project by `npm start`

Do a `GET` on `http://localhost:8080/checkout`
with this request body:
`[
    {
        "Customer": "default",
        "Items": [
            "classic",
            "classic",
            "premium"
        ],
        "Total": "$9999.99"
    },
    {
        "Customer": "SECOND",
        "Items": [
            "classic",
            "classic",
            "premium"
        ],
        "Total": "$9999.99"
    }
]`
This project is a WIP.