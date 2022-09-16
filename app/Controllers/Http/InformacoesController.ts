
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Informacoe from 'app/Models/Informacoe'
import InformacoeValidator from 'App/Validators/InformacoeValidator'

export default class InformacoesController {
  public async index({ }: HttpContextContract) {
    const Info = await Informacoe.all()
    return Info
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(InformacoeValidator)
    const Info = await Informacoe.create({ ...data })
    return Info
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const Info= await Informacoe.findOrFail(params.id)
      return Info
    } catch (error) {
      response.status(400).send("Informaçoes não encontrado!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { time, vitorias, temporada } = await request.validate(InformacoeValidator)
    try {
      const Info= await Informacoe.findOrFail(params.id)
      Info.time = time
      Info.vitorias = vitorias
      Info.temporada = temporada
      await Info.save()
      return Info

    } catch (error) {
      response.status(400).send("Informaçao não encontrado!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const Info = await Informacoe.findOrFail(params.id)
      await Info.delete()
      return Info
    } catch (error) {
      response.status(400).send("Informaçao não encontrado!!!")
    }
  }
}