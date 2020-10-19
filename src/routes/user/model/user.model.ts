import {getModelForClass, prop} from '@typegoose/typegoose'

export class User {
  @prop({required: true})
  public sub!: string

  @prop({required: true})
  public email!: string
}

export const UserModel = getModelForClass(User)
