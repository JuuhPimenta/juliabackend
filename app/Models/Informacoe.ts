import { DateTime } from 'luxon'
import { BaseModel, BelongsTo ,belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './ User'

export default class Informacoe extends BaseModel {

  @column({isPrimary: true })
  public clube: string

  @column()
  public temporada: number

  @column()
  public vitorias: number

  @column()
  public derrotas: number

  @column()
  public titulos: number


  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
