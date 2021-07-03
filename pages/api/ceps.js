const ceps = [{
    id: 1,  
    cep: '01025-010',
    localidade: 'Sao Paulo'
},
{
    id: 2,  
    cep: '80010-912',
    localidade: 'Curitiba'
},
{
    id: 3,  
    cep: '30120-000',
    localidade: 'Belo Horizonte'
}]


const handler = async (req, res) =>  {
    try { 

        const { method } = req;
       
        switch (method) {
            case 'GET':
                res.status(200).json(ceps)
                break;
            case 'POST' :
                res.status(200).json(ceps)
                break;
            case 'PUT' :
                //res.status(200).json(ceps)
                break;
            case 'DELETE' :
                //res.status(200).json(ceps)
                break;    
            default:
                res.status(500).end(`Ops... Solicitação ${method} não processada.`)
                break;
        }
      
    } catch (error) {
      res.status(500).end(`Erro: Solicitação ${method} não processada`)
    }
  }
  export default handler
  

  