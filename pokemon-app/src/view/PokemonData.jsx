import { Box, Card, CardContent, Chip, Stack, Typography, Paper} from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import { getColorByType } from "../data/types";

const PokemonData = ({ pokemonData }) => {
  const data = pokemonData;
  const pokemonName = data.name;
  const pokemonImage = data.sprites.other.home.front_default;
  const pokemonStats = data.stats;
  const pokemonTypes = data.types;

  const getTypeChipStyle = (type) => {
    const backgroundColor = getColorByType(type.type.name);
    return {
      backgroundColor,
      color: "white", // Puedes ajustar el color del texto según sea necesario
      margin: "4px", // Ajusta según el espaciado que prefieras
    };
  };

  return (
    <Paper elevation={10}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }}>{pokemonName}</Typography>
        <PokemonAvatar pokemonImage={pokemonImage} pokemonName={pokemonName} />
        <Box>
          {pokemonTypes.map((type) => (
            <Chip
              key={type.type.name}
              label={type.type.name}
              sx={getTypeChipStyle(type)}
            />
          ))}
        </Box>
      </CardContent>
    </Paper>
  );
};

export default PokemonData;
