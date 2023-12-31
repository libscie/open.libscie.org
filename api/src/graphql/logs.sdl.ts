export const schema = gql`
  type Log {
    id: Int!
    time: DateTime!
    title: String!
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
    time: DateTime!
    title: String!
    type: LogType!
    value: Float!
  }

  input UpdateLogInput {
    time: DateTime
    title: String
    type: LogType
    value: Float
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log! @requireAuth
    updateLog(id: Int!, input: UpdateLogInput!): Log! @requireAuth
    deleteLog(id: Int!): Log! @requireAuth
  }
`
