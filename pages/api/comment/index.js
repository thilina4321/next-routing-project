import fs from 'fs'
import path from 'path'

const handler = (req,res)=>{
    const {id, email, comment} = req.body
    if(req.method == 'POST'){

        const filePath = path.join(process.cwd(), 'data', 'comments.json')
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)

        data.push({id, email, comment})
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).send({msg:'success'})
    }
}

export default handler