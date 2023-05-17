import { Grid, GridItem, Show } from "@chakra-ui/react"


function App() {

  return (
    <Grid templateAreas={{ 
      base: '"nav" " main"',
      lg: '"nav nav" "main aside"', // Wider than 1024px

     }}>
      <GridItem area="nav">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App
