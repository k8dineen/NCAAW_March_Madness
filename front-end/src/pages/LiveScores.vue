<script setup>
import { ref, onMounted } from 'vue';

// Reactive variable to store games
const games = ref([]);

// Fetch data from backend
const fetchLiveScores = async () => {
  try {
    const response = await fetch('http://localhost:8000/scores'); // Connects to your backend
    const data = await response.json();
    games.value = data;
  } catch (error) {
    console.error('Error fetching live scores:', error);
  }
};

// Fetch data when component mounts
onMounted(fetchLiveScores);

// Format date function
const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString(); // Converts to user's local time
};
</script>

<template>
  <div class="live-scores">
    <h2>Live Scores - NCAA Women's March Madness</h2>
    <ul v-if="games.length">
      <li v-for="game in games" :key="game.id">
        <strong>{{ game.home_team }}</strong> vs <strong>{{ game.away_team }}</strong>
        <p>Start Time: {{ formatDate(game.commence_time) }}</p>
      </li>
    </ul>
    <p v-else>Loading live scores...</p>
  </div>
</template>

<style scoped>
.live-scores {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}
h2 {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}
p {
  font-size: 14px;
  color: #555;
}
</style>
