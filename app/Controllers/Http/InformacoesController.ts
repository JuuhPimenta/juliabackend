
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Informacoe from 'app/Models/Informacoe'
import InformacoeValidator from 'App/Validators/InformacoeValidator'
import { Info } from 'node_modules/@types/luxon'

export default class InformacoesController {
  public async index({ }: HttpContextContract) {
    const Informacoe= await Informacoe.all()
    return Informacoe
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(InformacoeValidator)
    const Informacoe = await Info.create({ ...data })
    return Informacoe
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const Informacoe = await Info.findOrFail(params.id)
      return Informacoe
    } catch (error) {
      response.status(400).send("Informaçoes não encontrado!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { name } = await request.validate(InformacoeValidator)
    try {
      const Informacoe = await Info.findOrFail(params.id)
      Informacoe.name = name
      await Informacoe.save()
      return Informacoe

    } catch (error) {
      response.status(400).send("Informaçao não encontrado!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const Informacoe = await Info.findOrFail(params.id)
      await Informacoe.delete()
      return Informacoe
    } catch (error) {
      response.status(400).send("Informaçao não encontrado!!!")
    }
  }
}