# Player

-   [Fields](#fields)
-   [Queries](#queries)
-   [Mutations](#mutations)
-   [Subscriptions](#subscriptions)

## Fields

List of fields available in the `Player` type.

| Field     | Scalar Type       | Unique  | Required (create) |
| --------- | ----------------- | ------- | ----------------- |
| id        | Int               | true    | true              |
| createdAt | AWSDateTime       | _false_ | true              |
| updatedAt | AWSDateTime       | _false_ | true              |
| handle    | String            | true    | true              |
| name      | String            | true    | true              |
| slug      | String            | true    | true              |
| height    | String            | _false_ | true              |
| weight    | String            | _false_ | true              |
| number    | String            | _false_ | _false_           |
| position  | String            | _false_ | _false_           |
| team      | [Team](./Team.md) | _false_ | _false_           |
| teamId    | Int               | true    | _false_           |

## Queries

Queries are responsible for all `Read` operations.

The generated queries are:

-   `getPlayer`: Read a single Player.
-   `listPlayers`: Read multiple Players.

### Querying a single Player

Single Player queries can take one input:

-   `where`: `PlayerWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard query**

```graphql
query {
    getPlayer(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        team # Relation to one
        teamId
    }
}
```

### Querying multiple Players

Multiple Players queries can take two inputs:

-   `where`: `PlayerWhereInput` An optional object type to filter the content based on a nested set of criteria.
-   `orderBy`: `PlayerOrderByInput` An optional object type to select which field(s) and order to sort the records on. Sorting can be in ascending order `ASC` or descending order `DESC`.

**Standard query**

```graphql
query {
    listPlayers {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        team # Relation to one
        teamId
    }
}
```

**Standard query with where**

```graphql
query {
    listPlayers(where: { createdAt: "dd/mm/YYYY" }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
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
slug: String
    slug_equals: String
    slug_not: String
    slug_lt: String
    slug_lte: String
    slug_gt: String
    slug_gte: String
    slug_contains: String
    slug_startsWith: String
    slug_endsWith: String
height: String
    height_equals: String
    height_not: String
    height_lt: String
    height_lte: String
    height_gt: String
    height_gte: String
    height_contains: String
    height_startsWith: String
    height_endsWith: String
weight: String
    weight_equals: String
    weight_not: String
    weight_lt: String
    weight_lte: String
    weight_gt: String
    weight_gte: String
    weight_contains: String
    weight_startsWith: String
    weight_endsWith: String
number: String
    number_equals: String
    number_not: String
    number_lt: String
    number_lte: String
    number_gt: String
    number_gte: String
    number_contains: String
    number_startsWith: String
    number_endsWith: String
position: String
    position_equals: String
    position_not: String
    position_lt: String
    position_lte: String
    position_gt: String
    position_gte: String
    position_contains: String
    position_startsWith: String
    position_endsWith: String
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
    listPlayers(
        where: { createdAt_startsWith: "dd/mm/YYYY" }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        team # Relation to one
        teamId
    }
}
```

**Standard query with orderBy**

```graphql
query {
    listPlayers(orderBy: { createdAt: DESC }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        team # Relation to one
        teamId
    }
}
```

## Mutations

Mutations are responsible for all `Create`, `Update`, and `Delete` operations.

The generated mutations are:

-   `createPlayer`: Create a single Player.
-   `updatePlayer`: Update a single Player.
-   `upsertPlayer`: Update existing OR create single Player.
-   `deletePlayer`: Delete a single Player.
-   `deleteManyPlayers`: Delete multiple Players.

### Creating a single Player

Single Player create mutations can take one input:

-   `data`: `PlayerCreateInput!` A required object type specifying the data to create a new record.

**Standard create mutation**

```graphql
mutation {
    createPlayer(
        data: {
            handle: "Foo"
            name: "Foo"
            slug: "Foo"
            height: "Foo"
            weight: "Foo"
            number: "Foo"
            position: "Foo"
            teamId: 2
        }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        teamId
    }
}
```

**Advanced create mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
team: {
    create: PlayerTeamCreateInput, # Relation to one
    connect: PlayerTeamWhereUniqueInput, # Relation to one
    connectOrCreate: PlayerTeamConnectOrCreateInput # Relation to one
}
```

</p>
</details>

```graphql
mutation {
    createPlayer(
        data: {
            team: {
                connectOrCreate: {
                    where: PlayerWhereUniqueInput
                    create: PlayerCreateInput
                }
            }
        }
    ) {
        id
    }
}
```

### Updating a single Player

Single Player update mutations can take two input:

-   `where`: `PlayerWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).
-   `data`: `PlayerUpdateInput!` A required object type specifying the data to update.

**Standard update mutation**

```graphql
mutation {
    updatePlayer(
        where: { id: 2 }
        data: {
            handle: "Foo"
            name: "Foo"
            slug: "Foo"
            height: "Foo"
            weight: "Foo"
            number: "Foo"
            position: "Foo"
            teamId: 2
        }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        teamId
    }
}
```

**Advanced update mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
team: {
    create: PlayerTeamCreateInput, # Relation to one
    connect: PlayerTeamWhereUniqueInput, # Relation to one
    connectOrCreate: PlayerTeamConnectOrCreateInput, # Relation to one
    update: PlayerTeamUpdateInput, # Relation to one
    upsert: PlayerTeamUpsertInput, # Relation to one
    delete: true,
    disconnect: true,
}
```

</p>
</details>

```graphql
mutation {
    updatePlayer(
        data: {
            team: {
                connectOrCreate: {
                    where: PlayerWhereUniqueInput
                    create: PlayerCreateInput
                }
            }
        }
    ) {
        id
    }
}
```

### Deleting a single Player

Single Player delete mutations can take one input:

-   `where`: `PlayerWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard delete mutation**

```graphql
mutation {
    deletePlayer(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        teamId
    }
}
```

### Deleting multiple Players

Multiple Players delete mutations can take one input:

-   `where`: `PlayerWhereInput!` A required object type specifying a field with a unique constraint (like createdAt).

**Standard deleteMany mutation**

```graphql
mutation {
    deleteManyPlayers(where: { createdAt: "dd/mm/YYYY" }) {
        count
    }
}
```

> `deleteManyPlayers` returns an integer that represents the number of records that were deleted.

## Subscriptions

Subscriptions allows listen for data changes when a specific event happens, in real-time.

### Subscribing to a single Player creation

```graphql
subscription {
    onCreatedPlayer {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        teamId
    }
}
```

### Subscribing to a single Player update

```graphql
subscription {
    onUpdatedPlayer {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        teamId
    }
}
```

### Subscribing to a single Player deletion

```graphql
subscription {
    onDeletedPlayer {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        height
        weight
        number
        position
        teamId
    }
}
```
