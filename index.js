// modulos
const express = require("express");
const cors = require('cors');
const bd = require("./bd")
const app = express();
const bodyParser = require('body-parser');
const session = require("express-session");
const PORT = 8000;
const HOST = '0.0.0.0';
// CORS
app.use(cors());

const { or, and, gt, lt } = bd.Sequelize.Op;
// sessão
app.use(session({
  secret: "amamosbiotecnologia",
  resave: true,
  saveUninitialized: true
}))
//configurando o EJS
app.set('view engine', 'ejs'); 

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.cookie("Cookie", "Cookie pra dps",{maxAge:1000*60*60})
    res.render('index',{})
})
app.get('/guia',(req,res)=>{
    res.render('guia', {})
})
app.get('/terminologiaDendrologica',(req,res)=>{
    res.render('terminologiaDendrologica', {})
})
app.get('/equipe',(req,res)=>{
    res.render('equipe', {})
})
app.get('/listaEspecies',(req,res)=>{
    bd.arvoresCampus.findAll().then(arvores=>{
    res.render('especies', {arvores: arvores})
    })
})

app.post('/paginaEspecie',(req,res)=>{
    bd.arvoresCampus.findAll({where:{id:req.body.id}}).then(arvores=>{
        res.render('paginaEspecie', {arvores: arvores})
    }).catch(()=>{
        res.redirect('/')
    })
})
app.get('/pesquisas', (req,res)=>{
    arvores = []
    param = []
    i=0
    arvores = req.session.caule
    if(arvores.length==0){
        arvores = req.session.folha
    }if(arvores.length==0){
        arvores = req.session.filotaxia
    }if(arvores.length==0){
        arvores = req.session.forma
    }if(arvores.length==0){
        arvores = req.session.margem
    }if(arvores.length==0){
        arvores = req.session.apice
    }if(arvores.length==0){
        arvores = req.session.base
    }if(arvores.length==0){
        arvores = req.session.nervacao
    }if(arvores.length==0){
        arvores = req.session.consistencia
    }if(arvores.length==0){
        arvores = req.session.pilosidade
    }if(arvores.length==0){
        arvores = req.session.caracteresEspeciaisFolha
    }if(arvores.length==0){
        arvores = req.session.CorCascaInterna
    }if(arvores.length==0){
        arvores = req.session.aparenciaRitidoma
    }if(arvores.length==0){
        arvores = req.session.deiscenciaRitidoma
    }if(arvores.length==0){
        arvores = req.session.texturaInterna
    }if(arvores.length==0){
        arvores = req.session.caracteresEspeciaisCaule
    }
    // Folha
    if(req.session.folha.length!=0){
        arvores.forEach(element => {
            req.session.folha.forEach(folha=>{
                if(folha.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // Filotaxia
    if(req.session.filotaxia.length!=0){
        arvores.forEach(element => {
            req.session.filotaxia.forEach(filotaxia=>{
                if(filotaxia.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // Forma
    if(req.session.forma.length!=0){
        arvores.forEach(element => {
            req.session.forma.forEach(forma=>{
                if(forma.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // Margem
    if(req.session.margem.length!=0){
        arvores.forEach(element => {
            req.session.margem.forEach(margem=>{
                if(margem.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // Apice
    if(req.session.apice.length!=0){
        arvores.forEach(element => {
            req.session.apice.forEach(apice=>{
                if(apice.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // base
    if(req.session.base.length!=0){
        arvores.forEach(element => {
            req.session.base.forEach(base=>{
                if(base.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // Nervacao
    if(req.session.nervacao.length!=0){
        arvores.forEach(element => {
            req.session.nervacao.forEach(nervacao=>{
                if(nervacao.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // consistencia 
    if(req.session.consistencia.length!=0){
        arvores.forEach(element => {
            req.session.consistencia.forEach(consistencia=>{
                if(consistencia.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // pilosidade 
    if(req.session.pilosidade.length!=0){
        arvores.forEach(element => {
            req.session.pilosidade.forEach(pilosidade=>{
                if(pilosidade.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // caracteresEspeciaisFolha
    if(req.session.caracteresEspeciaisFolha.length!=0){
        arvores.forEach(element => {
            req.session.caracteresEspeciaisFolha.forEach(caracteresEspeciaisFolha=>{
                if(caracteresEspeciaisFolha.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // aparenciaritidoma 
    if(req.session.aparenciaRitidoma.length!=0){
        arvores.forEach(element => {
            req.session.aparenciaRitidoma.forEach(aparenciaRitidoma=>{
                if(aparenciaRitidoma.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // deiscenciaritidma 
    if(req.session.deiscenciaRitidoma.length!=0){
        arvores.forEach(element => {
            req.session.deiscenciaRitidoma.forEach(deiscenciaRitidoma=>{
                if(deiscenciaRitidoma.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // testurainterna 
    if(req.session.texturaInterna.length!=0){
        arvores.forEach(element => {
            req.session.texturaInterna.forEach(texturaInterna=>{
                if(texturaInterna.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // corcascainterna
    if(req.session.CorCascaInterna.length!=0){
        arvores.forEach(element => {
            req.session.CorCascaInterna.forEach(CorCascaInterna=>{
                if(CorCascaInterna.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    // caracteresEspeciaisCaule
    if(req.session.caracteresEspeciaisCaule.length!=0){
        arvores.forEach(element => {
            req.session.caracteresEspeciaisCaule.forEach(caracteresEspeciaisCaule=>{
                if(caracteresEspeciaisCaule.id==element.id){
                    param = param.concat(element)
                    i = 1
                    return true;
                }
            })
            if(i==1){
                i=0
                return true;
            }
        })
        arvores = param
        param = []
    }
    res.render('especies', {arvores: arvores})
})
app.post('/pesquisar', (req,res)=>{
    bd.arvoresCampus.findAll({where: {tipoCaule: req.body.tipoCaule}}).then(caule=>{
        bd.arvoresCampus.findAll({where: {tipoFolha: req.body.tipoFolha}}).then(folha=>{
            bd.arvoresCampus.findAll({where: {filotaxia: req.body.filotaxiaFolha}}).then(filotaxia=>{
                bd.arvoresCampus.findAll({where: {forma: req.body.formaFolha}}).then(forma=>{
                    bd.arvoresCampus.findAll({where: {margem: req.body.margemFolha}}).then(margem=>{
                        bd.arvoresCampus.findAll({where: {apice: req.body.apiceFolha}}).then(apice=>{
                            bd.arvoresCampus.findAll({where: {base: req.body.baseFolha}}).then(base=>{
                                bd.arvoresCampus.findAll({where: {nervacao: req.body.nervacao}}).then(nervacao=>{
                                    bd.arvoresCampus.findAll({where: {consistencia: req.body.consistencia}}).then(consistencia=>{
                                        bd.arvoresCampus.findAll({where: {pilosidade: req.body.pilosidade}}).then(pilosidade=>{
                                            bd.arvoresCampus.findAll({where: {caracteresEspeciaisFolha: req.body.caracteresEspeciaisFolha}}).then(caracteresEspeciaisFolha=>{
                                                bd.arvoresCampus.findAll({where: {aparenciaRitidoma: req.body.aparenciaRitidoma}}).then(aparenciaRitidoma=>{
                                                    bd.arvoresCampus.findAll({where: {deiscenciaRitidoma: req.body.deiscenciaRitidoma}}).then(deiscenciaRitidoma=>{
                                                        bd.arvoresCampus.findAll({where: {texturainterna: req.body.texturaCascaInterna}}).then(texturaInterna=>{
                                                            bd.arvoresCampus.findAll({where: {CorCascaInterna: req.body.CorCascaInterna}}).then(CorCascaInterna=>{
                                                                bd.arvoresCampus.findAll({where: {caracteresEspeciaisCaule: req.body.caracteresEspeciaisCaule}}).then(caracteresEspeciaisCaule=>{
                                                                    req.session.caule = caule
                                                                    req.session.folha = folha
                                                                    req.session.filotaxia = filotaxia
                                                                    req.session.forma = forma
                                                                    req.session.margem = margem
                                                                    req.session.apice = apice
                                                                    req.session.base = base
                                                                    req.session.nervacao = nervacao
                                                                    req.session.consistencia = consistencia
                                                                    req.session.pilosidade = pilosidade
                                                                    req.session.caracteresEspeciaisFolha = caracteresEspeciaisFolha
                                                                    req.session.aparenciaRitidoma = aparenciaRitidoma
                                                                    req.session.deiscenciaRitidoma = deiscenciaRitidoma
                                                                    req.session.texturaInterna = texturaInterna
                                                                    req.session.CorCascaInterna = CorCascaInterna
                                                                    req.session.caracteresEspeciaisCaule = caracteresEspeciaisCaule
                                                                    res.redirect('pesquisas')
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
app.get('/contatos',(req,res)=>{
    res.render('contatos', {})
})
app.use('/public', express.static('public'));
// servidor na porta 3000 :D
app.listen(PORT, HOST, () => { console.log("Foi!") })