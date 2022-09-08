import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import User from './ User'

export default class Informacoe extends BaseModel {

  @column({isPrimary: true })
  public clube: string

  @column()
  public temporada: number

  @column()
  public vitorias: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


}
