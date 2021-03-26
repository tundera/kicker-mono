# Coach

-   [Fields](#fields)
-   [Queries](#queries)
-   [Mutations](#mutations)
-   [Subscriptions](#subscriptions)

## Fields

List of fields available in the `Coach` type.

| Field       | Scalar Type       | Unique  | Required (create) |
| ----------- | ----------------- | ------- | ----------------- |
| id          | Int               | true    | true              |
| createdAt   | AWSDateTime       | _false_ | true              |
| updatedAt   | AWSDateTime       | _false_ | true              |
| handle      | String            | true    | true              |
| name        | String            | true    | true              |
| type        | String            | _false_ | _false_           |
| isAssistant | String            | _false_ | _false_           |
| team        | [Team](./Team.md) | _false_ | _false_           |
| teamId      | Int               | true    | _false_           |

## Queries

Queries are responsible for all `Read` operations.

The generated queries are:

-   `getCoach`: Read a single Coach.
-   `listCoaches`: Read multiple Coaches.

### Querying a single Coach

Single Coach queries can take one input:

-   `where`: `CoachWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard query**

```graphql
query {
    getCoach(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        team # Relation to one
        teamId
    }
}
```

### Querying multiple Coaches

Multiple Coaches queries can take two inputs:

-   `where`: `CoachWhereInput` An optional object type to filter the content based on a nested set of criteria.
-   `orderBy`: `CoachOrderByInput` An optional object type to select which field(s) and order to sort the records on. Sorting can be in ascending order `ASC` or descending order `DESC`.

**Standard query**

```graphql
query {
    listCoaches {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        team # Relation to one
        teamId
    }
}
```

**Standard query with where**

```graphql
query {
    listCoaches(where: { createdAt: "dd/mm/YYYY" }) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        team # Relation to one
        teamId
    }
}
```

**Advanced query using filters**

<details><summary>List of all filters available</summary>
<p>

```graphql
id: Int
    id_equals: Int
    id_not: Int
    id_lt: Int
    id_lte: Int
    id_gt: Int
    id_gte: Int
    id_contains: Int
    id_startsWith: Int
    id_endsWith: Int
createdAt: AWSDateTime
    createdAt_equals: AWSDateTime
    createdAt_not: AWSDateTime
    createdAt_lt: AWSDateTime
    createdAt_lte: AWSDateTime
    createdAt_gt: AWSDateTime
    createdAt_gte: AWSDateTime
    createdAt_contains: AWSDateTime
    createdAt_startsWith: AWSDateTime
    createdAt_endsWith: AWSDateTime
updatedAt: AWSDateTime
    updatedAt_equals: AWSDateTime
    updatedAt_not: AWSDateTime
    updatedAt_lt: AWSDateTime
    updatedAt_lte: AWSDateTime
    updatedAt_gt: AWSDateTime
    updatedAt_gte: AWSDateTime
    updatedAt_contains: AWSDateTime
    updatedAt_startsWith: AWSDateTime
    updatedAt_endsWith: AWSDateTime
handle: String
    handle_equals: String
    handle_not: String
    handle_lt: String
    handle_lte: String
    handle_gt: String
    handle_gte: String
    handle_contains: String
    handle_startsWith: String
    handle_endsWith: String
name: String
    name_equals: String
    name_not: String
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_startsWith: String
    name_endsWith: String
type: String
    type_equals: String
    type_not: String
    type_lt: String
    type_lte: String
    type_gt: String
    type_gte: String
    type_contains: String
    type_startsWith: String
    type_endsWith: String
isAssistant: String
    isAssistant_equals: String
    isAssistant_not: String
    isAssistant_lt: String
    isAssistant_lte: String
    isAssistant_gt: String
    isAssistant_gte: String
    isAssistant_contains: String
    isAssistant_startsWith: String
    isAssistant_endsWith: String
teamId: Int
    teamId_equals: Int
    teamId_not: Int
    teamId_lt: Int
    teamId_lte: Int
    teamId_gt: Int
    teamId_gte: Int
    teamId_contains: Int
    teamId_startsWith: Int
    teamId_endsWith: Int

```

</p>
</details>

```graphql
query {
    listCoaches(
        where: { createdAt_startsWith: "dd/mm/YYYY" }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        team # Relation to one
        teamId
    }
}
```

**Standard query with orderBy**

```graphql
query {
    listCoaches(orderBy: { createdAt: DESC }) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        team # Relation to one
        teamId
    }
}
```

## Mutations

Mutations are responsible for all `Create`, `Update`, and `Delete` operations.

The generated mutations are:

-   `createCoach`: Create a single Coach.
-   `updateCoach`: Update a single Coach.
-   `upsertCoach`: Update existing OR create single Coach.
-   `deleteCoach`: Delete a single Coach.
-   `deleteManyCoaches`: Delete multiple Coaches.

### Creating a single Coach

Single Coach create mutations can take one input:

-   `data`: `CoachCreateInput!` A required object type specifying the data to create a new record.

**Standard create mutation**

```graphql
mutation {
    createCoach(
        data: {
            handle: "Foo"
            name: "Foo"
            type: "Foo"
            isAssistant: "Foo"
            teamId: 2
        }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        teamId
    }
}
```

**Advanced create mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
team: {
    create: CoachTeamCreateInput, # Relation to one
    connect: CoachTeamWhereUniqueInput, # Relation to one
    connectOrCreate: CoachTeamConnectOrCreateInput # Relation to one
}
```

</p>
</details>

```graphql
mutation {
    createCoach(
        data: {
            team: {
                connectOrCreate: {
                    where: CoachWhereUniqueInput
                    create: CoachCreateInput
                }
            }
        }
    ) {
        id
    }
}
```

### Updating a single Coach

Single Coach update mutations can take two input:

-   `where`: `CoachWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).
-   `data`: `CoachUpdateInput!` A required object type specifying the data to update.

**Standard update mutation**

```graphql
mutation {
    updateCoach(
        where: { id: 2 }
        data: {
            handle: "Foo"
            name: "Foo"
            type: "Foo"
            isAssistant: "Foo"
            teamId: 2
        }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        teamId
    }
}
```

**Advanced update mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
team: {
    create: CoachTeamCreateInput, # Relation to one
    connect: CoachTeamWhereUniqueInput, # Relation to one
    connectOrCreate: CoachTeamConnectOrCreateInput, # Relation to one
    update: CoachTeamUpdateInput, # Relation to one
    upsert: CoachTeamUpsertInput, # Relation to one
    delete: true,
    disconnect: true,
}
```

</p>
</details>

```graphql
mutation {
    updateCoach(
        data: {
            team: {
                connectOrCreate: {
                    where: CoachWhereUniqueInput
                    create: CoachCreateInput
                }
            }
        }
    ) {
        id
    }
}
```

### Deleting a single Coach

Single Coach delete mutations can take one input:

-   `where`: `CoachWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard delete mutation**

```graphql
mutation {
    deleteCoach(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        teamId
    }
}
```

### Deleting multiple Coaches

Multiple Coaches delete mutations can take one input:

-   `where`: `CoachWhereInput!` A required object type specifying a field with a unique constraint (like createdAt).

**Standard deleteMany mutation**

```graphql
mutation {
    deleteManyCoaches(where: { createdAt: "dd/mm/YYYY" }) {
        count
    }
}
```

> `deleteManyCoaches` returns an integer that represents the number of records that were deleted.

## Subscriptions

Subscriptions allows listen for data changes when a specific event happens, in real-time.

### Subscribing to a single Coach creation

```graphql
subscription {
    onCreatedCoach {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        teamId
    }
}
```

### Subscribing to a single Coach update

```graphql
subscription {
    onUpdatedCoach {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        teamId
    }
}
```

### Subscribing to a single Coach deletion

```graphql
subscription {
    onDeletedCoach {
        id
        createdAt
        updatedAt
        handle
        name
        type
        isAssistant
        teamId
    }
}
```
