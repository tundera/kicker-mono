import { Grid } from '@chakra-ui/react'
import { FC } from 'react'
import SimpleCard from 'src/components/ui/commerce/shopping/SimpleCard'

interface Props {
  products: any
}

const ProductsGrid: FC<Props> = ({ products }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, minmax(0, 1fr))',
        md: 'repeat(2, minmax(0, 1fr))',
        xl: 'repeat(3, minmax(0, 1fr))',
      }}
      alignItems="stretch"
      gap="12"
    >
      {products.map((product) => {
        const [primaryImage] = product.images

        return (
          <SimpleCard
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.formattedPrice}
            image={primaryImage}
            href={`/store/products/${product.slug}`}
          />
        )
      })}
    </Grid>
  )
}

export default ProductsGrid
