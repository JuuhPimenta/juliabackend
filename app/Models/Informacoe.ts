import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class Informacoe extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public time: string


  @column()
  public temporada: number

  @column()
  public vitorias: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


}
