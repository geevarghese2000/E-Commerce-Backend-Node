import express from 'express';
app.post("/", async (req: Request, res: Response) => {
    try {
        const { fullname, e_mail, password, profile_pic } = req.body;

        await EcSuppliers.create({ fullname, e_mail, password, profile_pic: Buffer.from(profile_pic), }, { raw: false });

        res.status(200).json({ message: "Successfully inserted data in the table." })
    }
    catch (error: any) {
        console.log(error);
        res.status(500).json({ error: error.toString() });//internal server error
    }
  })