const {response} = require("express")


const crearUsuario = async(req, res=response) => {

    res.json({
        ok:true,
        msg: 'new'
    })
}

//login
const login =  async(req, res=response)=>{

    const body = req.body;

    res.json({
        ok:true,
        msg: 'login',
        body
    })
}


//renewToken
const renewToken = async(req, res=response)=>{
    res.json({
        ok:true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    login, 
    renewToken
}

