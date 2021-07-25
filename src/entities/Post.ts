import { Entity, PrimaryKey, Property } from "@mikro-orm/core"

@Entity()
export class Post {
  @PrimaryKey()
  id!: number

  @Property({ type: Date })
  createdAt = new Date()

  @Property({ type: Date, onUpdate: () => Date() })
  updatedAt = new Date()

  @Property()
  title!: string
}
