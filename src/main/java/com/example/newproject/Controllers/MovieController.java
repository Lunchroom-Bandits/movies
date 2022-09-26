package com.example.newproject.Controllers;

import com.example.newproject.Repository.GenreRepository;
import com.example.newproject.Repository.MovieRepository;
import com.example.newproject.data.Movie;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static javax.swing.JOptionPane.showMessageDialog;

@AllArgsConstructor
@RestController
@RequestMapping(value ="/api/movies", produces = "application/json")
public class MovieController {
    private MovieRepository movieRepository;
    private GenreRepository genreRepository;

    @GetMapping("")
        private List<Movie> getAllMovie() {
            List<Movie> allMovies = movieRepository.findAll();
            return allMovies;
        }

    @PostMapping("")
    private void addAMovie(@RequestBody Movie newMovie) {


        movieRepository.save(newMovie);
    }

    @DeleteMapping("/{id}")
        private void deleteAMovie(@PathVariable Long id) {


        movieRepository.deleteById(id);
    }

    @PutMapping("/{id}")
        private void editAMovie(@PathVariable Long id, @RequestBody Movie updateMovie) {
            updateMovie.setId(id);
            movieRepository.save(updateMovie);
    }
}
