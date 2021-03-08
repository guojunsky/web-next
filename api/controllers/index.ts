/**
 * rest 接口定义
 */
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({ success: true, message: 'Welcome' })
})
export default router