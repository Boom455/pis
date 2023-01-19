import { Router } from "express";
import data from "./data";

const router = Router()

router.get('/', async (req, res) => {
    res.json(
        {
            service: 'PIS API'
        }
    );
});
router.get('/product/:product_code', async (req, res) => {
    try {
        res.json(
            {
                product: req.params.product_code,
                ...data.product_list[req.params.product_code.toString()],
                type: data.product_type[data.product_list[req.params.product_code.toString()].type]
            }
        );
        
    } catch (error: any) {
        res.status(400).json({
            name : error.name,
            error: error.message,
            stack: error.stack,
            message: 'Product not found'
        })
    }
});

export default router
