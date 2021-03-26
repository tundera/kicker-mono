# Team

-   [Fields](#fields)
-   [Queries](#queries)
-   [Mutations](#mutations)
-   [Subscriptions](#subscriptions)

## Fields

List of fields available in the `Team` type.

| Field         | Scalar Type                     | Unique  | Required (create) |
| ------------- | ------------------------------- | ------- | ----------------- |
| id            | Int                             | true    | true              |
| createdAt     | AWSDateTime                     | _false_ | true              |
| updatedAt     | AWSDateTime                     | _false_ | true              |
| handle        | String                          | true    | true              |
| name          | String                          | true    | true              |
| slug          | String                          | true    | true              |
| city          | String                          | _false_ | true              |
| abbreviation  | String                          | true    | true              |
| logo          | String                          | true    | true              |
| logoSlug      | String                          | true    | true              |
| wins          | Int                             | _false_ | _false_           |
| losses        | Int                             | _false_ | _false_           |
| winPercentage | Float                           | _false_ | _false_           |
| conference    | String                          | _false_ | true              |
| division      | String                          | _false_ | true              |
| established   | String                          | _false_ | true              |
| coaches       | [[Coach!]](./Coach.md)          | _false_ | _false_           |
| colorScheme   | [ColorScheme](./ColorScheme.md) | _false_ | _false_           |
| players       | [[Player!]](./Player.md)        | _false_ | _false_           |

## Queries

Queries are responsible for all `Read` operations.

The generated queries are:

-   `getTeam`: Read a single Team.
-   `listTeams`: Read multiple Teams.

### Querying a single Team

Single Team queries can take one input:

-   `where`: `TeamWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard query**

```graphql
query {
    getTeam(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established

        coaches # Relation to many
        colorScheme # Relation to many
        players # Relation to many
    }
}
```

### Querying multiple Teams

Multiple Teams queries can take two inputs:

-   `where`: `TeamWhereInput` An optional object type to filter the content based on a nested set of criteria.
-   `orderBy`: `TeamOrderByInput` An optional object type to select which field(s) and order to sort the records on. Sorting can be in ascending order `ASC` or descending order `DESC`.

**Standard query**

```graphql
query {
    listTeams {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established

        coaches # Relation to many
        colorScheme # Relation to many
        players # Relation to many
    }
}
```

**Standard query with where**

```graphql
query {
    listTeams(where: { createdAt: "dd/mm/YYYY" }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established

        coaches # Relation to many
        colorScheme # Relation to many
        players # Relation to many
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
city: String
    city_equals: String
    city_not: String
    city_lt: String
    city_lte: String
    city_gt: String
    city_gte: String
    city_contains: String
    city_startsWith: String
    city_endsWith: String
abbreviation: String
    abbreviation_equals: String
    abbreviation_not: String
    abbreviation_lt: String
    abbreviation_lte: String
    abbreviation_gt: String
    abbreviation_gte: String
    abbreviation_contains: String
    abbreviation_startsWith: String
    abbreviation_endsWith: String
logo: String
    logo_equals: String
    logo_not: String
    logo_lt: String
    logo_lte: String
    logo_gt: String
    logo_gte: String
    logo_contains: String
    logo_startsWith: String
    logo_endsWith: String
logoSlug: String
    logoSlug_equals: String
    logoSlug_not: String
    logoSlug_lt: String
    logoSlug_lte: String
    logoSlug_gt: String
    logoSlug_gte: String
    logoSlug_contains: String
    logoSlug_startsWith: String
    logoSlug_endsWith: String
wins: Int
    wins_equals: Int
    wins_not: Int
    wins_lt: Int
    wins_lte: Int
    wins_gt: Int
    wins_gte: Int
    wins_contains: Int
    wins_startsWith: Int
    wins_endsWith: Int
losses: Int
    losses_equals: Int
    losses_not: Int
    losses_lt: Int
    losses_lte: Int
    losses_gt: Int
    losses_gte: Int
    losses_contains: Int
    losses_startsWith: Int
    losses_endsWith: Int
winPercentage: Float
    winPercentage_equals: Float
    winPercentage_not: Float
    winPercentage_lt: Float
    winPercentage_lte: Float
    winPercentage_gt: Float
    winPercentage_gte: Float
    winPercentage_contains: Float
    winPercentage_startsWith: Float
    winPercentage_endsWith: Float
conference: String
    conference_equals: String
    conference_not: String
    conference_lt: String
    conference_lte: String
    conference_gt: String
    conference_gte: String
    conference_contains: String
    conference_startsWith: String
    conference_endsWith: String
division: String
    division_equals: String
    division_not: String
    division_lt: String
    division_lte: String
    division_gt: String
    division_gte: String
    division_contains: String
    division_startsWith: String
    division_endsWith: String
established: String
    established_equals: String
    established_not: String
    established_lt: String
    established_lte: String
    established_gt: String
    established_gte: String
    established_contains: String
    established_startsWith: String
    established_endsWith: String

```

</p>
</details>

```graphql
query {
    listTeams(
        where: { createdAt_startsWith: "dd/mm/YYYY" }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established

        coaches # Relation to many
        colorScheme # Relation to many
        players # Relation to many
    }
}
```

**Standard query with orderBy**

```graphql
query {
    listTeams(orderBy: { createdAt: DESC }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established

        coaches # Relation to many
        colorScheme # Relation to many
        players # Relation to many
    }
}
```

## Mutations

Mutations are responsible for all `Create`, `Update`, and `Delete` operations.

The generated mutations are:

-   `createTeam`: Create a single Team.
-   `updateTeam`: Update a single Team.
-   `upsertTeam`: Update existing OR create single Team.
-   `deleteTeam`: Delete a single Team.
-   `deleteManyTeams`: Delete multiple Teams.

### Creating a single Team

Single Team create mutations can take one input:

-   `data`: `TeamCreateInput!` A required object type specifying the data to create a new record.

**Standard create mutation**

```graphql
mutation {
    createTeam(
        data: {
            handle: "Foo"
            name: "Foo"
            slug: "Foo"
            city: "Foo"
            abbreviation: "Foo"
            logo: "Foo"
            logoSlug: "Foo"
            wins: 2
            losses: 2
            winPercentage: 2.5
            conference: "Foo"
            division: "Foo"
            established: "Foo"
        }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established
    }
}
```

**Advanced create mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
coaches: {
    create: [TeamCoachesCreateInput], # Relation to many
    connect: [TeamCoachesWhereUniqueInput], # Relation to many
    connectOrCreate: [TeamCoachesConnectOrCreateInput] # Relation to many
}
colorScheme: {
    create: [TeamColorSchemeCreateInput], # Relation to many
    connect: [TeamColorSchemeWhereUniqueInput], # Relation to many
    connectOrCreate: [TeamColorSchemeConnectOrCreateInput] # Relation to many
}
players: {
    create: [TeamPlayersCreateInput], # Relation to many
    connect: [TeamPlayersWhereUniqueInput], # Relation to many
    connectOrCreate: [TeamPlayersConnectOrCreateInput] # Relation to many
}
```

</p>
</details>

```graphql
mutation {
    createTeam(
        data: {
            coaches: {
                connectOrCreate: [
                    {
                        where: TeamWhereUniqueInput
                        create: TeamCreateInput
                    }
                ]
            }
        }
    ) {
        id
    }
}
```

### Updating a single Team

Single Team update mutations can take two input:

-   `where`: `TeamWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).
-   `data`: `TeamUpdateInput!` A required object type specifying the data to update.

**Standard update mutation**

```graphql
mutation {
    updateTeam(
        where: { id: 2 }
        data: {
            handle: "Foo"
            name: "Foo"
            slug: "Foo"
            city: "Foo"
            abbreviation: "Foo"
            logo: "Foo"
            logoSlug: "Foo"
            wins: 2
            losses: 2
            winPercentage: 2.5
            conference: "Foo"
            division: "Foo"
            established: "Foo"
        }
    ) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established
    }
}
```

**Advanced update mutation using relation queries**

<details><summary>List of all nested queries available</summary>
<p>

```graphql
coaches: {
    create: [TeamCoachesCreateInput], # Relation to many
    connect: [TeamCoachesWhereUniqueInput], # Relation to many
    connectOrCreate: [TeamCoachesConnectOrCreateInput], # Relation to many
    update: [TeamCoachesUpdateUniqueInput], # Relation to many
    upsert: [TeamCoachesUpsertUniqueInput], # Relation to many
    delete: [TeamCoachesDeleteUniqueInput], # Relation to many
    disconnect: [TeamCoachesWhereUniqueInput], # Relation to many
    set: [TeamCoachesWhereUniqueInput], # Relation to many
    updateMany: [TeamCoachesUpdateManyInput], # Relation to many
    deleteMany: [TeamCoachesDeleteManyInput], # Relation to many
}
colorScheme: {
    create: [TeamColorSchemeCreateInput], # Relation to many
    connect: [TeamColorSchemeWhereUniqueInput], # Relation to many
    connectOrCreate: [TeamColorSchemeConnectOrCreateInput], # Relation to many
    update: [TeamColorSchemeUpdateUniqueInput], # Relation to many
    upsert: [TeamColorSchemeUpsertUniqueInput], # Relation to many
    delete: [TeamColorSchemeDeleteUniqueInput], # Relation to many
    disconnect: [TeamColorSchemeWhereUniqueInput], # Relation to many
    set: [TeamColorSchemeWhereUniqueInput], # Relation to many
    updateMany: [TeamColorSchemeUpdateManyInput], # Relation to many
    deleteMany: [TeamColorSchemeDeleteManyInput], # Relation to many
}
players: {
    create: [TeamPlayersCreateInput], # Relation to many
    connect: [TeamPlayersWhereUniqueInput], # Relation to many
    connectOrCreate: [TeamPlayersConnectOrCreateInput], # Relation to many
    update: [TeamPlayersUpdateUniqueInput], # Relation to many
    upsert: [TeamPlayersUpsertUniqueInput], # Relation to many
    delete: [TeamPlayersDeleteUniqueInput], # Relation to many
    disconnect: [TeamPlayersWhereUniqueInput], # Relation to many
    set: [TeamPlayersWhereUniqueInput], # Relation to many
    updateMany: [TeamPlayersUpdateManyInput], # Relation to many
    deleteMany: [TeamPlayersDeleteManyInput], # Relation to many
}
```

</p>
</details>

```graphql
mutation {
    updateTeam(
        data: {
            coaches: {
                connectOrCreate: [
                    {
                        where: TeamWhereUniqueInput
                        create: TeamCreateInput
                    }
                ]
            }
        }
    ) {
        id
    }
}
```

### Deleting a single Team

Single Team delete mutations can take one input:

-   `where`: `TeamWhereUniqueInput!` A required object type specifying a field with a unique constraint (like id).

**Standard delete mutation**

```graphql
mutation {
    deleteTeam(where: { id: 2 }) {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established
    }
}
```

### Deleting multiple Teams

Multiple Teams delete mutations can take one input:

-   `where`: `TeamWhereInput!` A required object type specifying a field with a unique constraint (like createdAt).

**Standard deleteMany mutation**

```graphql
mutation {
    deleteManyTeams(where: { createdAt: "dd/mm/YYYY" }) {
        count
    }
}
```

> `deleteManyTeams` returns an integer that represents the number of records that were deleted.

## Subscriptions

Subscriptions allows listen for data changes when a specific event happens, in real-time.

### Subscribing to a single Team creation

```graphql
subscription {
    onCreatedTeam {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established
    }
}
```

### Subscribing to a single Team update

```graphql
subscription {
    onUpdatedTeam {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established
    }
}
```

### Subscribing to a single Team deletion

```graphql
subscription {
    onDeletedTeam {
        id
        createdAt
        updatedAt
        handle
        name
        slug
        city
        abbreviation
        logo
        logoSlug
        wins
        losses
        winPercentage
        conference
        division
        established
    }
}
```
