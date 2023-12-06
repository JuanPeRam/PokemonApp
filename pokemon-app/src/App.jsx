import { useEffect, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { fetchPokemon } from './data/fetchPokemon';
import PokemonData from './view/PokemonData';
import { AppBar, Pagination, Stack,Toolbar,IconButton,Typography, Divider } from '@mui/material';

const maxPages = 80;
const POKEMONSHOWN = 12;

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentVariant, setCurrentVariant] = useState('contained');
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setCurrentVariant('disabled');

      const dataArrPokemon = [];
      let startIndex = POKEMONSHOWN * (currentPage-1) + 1;
      let endIndex = startIndex+POKEMONSHOWN -1 ;

      try {
        const promises = [];

        for (let index = startIndex; index <= endIndex; index++) {
          promises.push(fetchPokemon({ pokemonId: index }));
        }

        const resolvedData = await Promise.all(promises);
        setPokemonData(resolvedData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
        setCurrentVariant('contained');
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Pagination count={maxPages} color='primary' page={currentPage} onChange={handlePageChange} />
      {!isLoading &&
        pokemonData &&
        <section className='pokemon-data-grid'>
          {pokemonData.map((data) => <PokemonData pokemonData={data} key={data.name}/>)}
        </section>
      }

    </>
  );
}

export default App;
