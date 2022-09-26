package com.example.newproject.Controllers;

import com.example.newproject.Repository.GenreRepository;
import com.example.newproject.data.Genre;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/genres", produces = "application/json")

public class GenreController {
    private GenreRepository genreRepository;

    @GetMapping("")
        private List<Genre> fetchAllGenres() {
            List<Genre> allGenres = genreRepository.findAll();
            return allGenres;
    }

    @GetMapping("/search")
        private Genre searchByGenres(@RequestParam String genre) {
            Genre genres = genreRepository.findByName(genre);
            if (genre == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "The genre does not exist");
            }
            return genres;
    }

}
