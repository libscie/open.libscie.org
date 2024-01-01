export const schema = gql`
  type Log {
    id: Int!
    time: DateTime
    activity: Boolean!
    type: LogType!
    value: Float!
  }

  enum LogType {
    CashOnHand
  }

  type Query {
    logs: [Log!]! @requireAuth
    log(id: Int!): Log @requireAuth
  }

  input CreateLogInput {
    time: DateTime
    activity: Boolean!
    type: LogType!
    value: Float!
  }

  input UpdateLogInput {
    time: DateTime
    activity: Boolean
    type: LogType
    value: Float
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log! @requireAuth
    updateLog(id: Int!, input: UpdateLogInput!): Log! @requireAuth
    deleteLog(id: Int!): Log! @requireAuth
  }
`
