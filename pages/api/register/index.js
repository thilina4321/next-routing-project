const handler = (req,res)=>{
    const {email} = req.body

    if(req.method == 'POST'){
        console.log(email);
        res.status(201).send({msg:'Registered successfully'})
    }
}

export default handler