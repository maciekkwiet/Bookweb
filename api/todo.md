ROUTES:

- sprawdzić czy nie są wysyłane wrażliwe dane, poprawić,
- można sprawdzić czy w miejscach put/post jest walidacja wprowadzanych danych,

- jakich routeów/danych brakuje?

- co można zrobić prościej/lepiej/czytelniej?

- Czy przy edycji (put) jest jakiś ładniejszy/inny sposób na edytowanie tylko podanych w requescie danych - ten zapis
  działa fajnie (m.in nie nadpisuje pola jeżeli podamy np. pusty string (false)), ale w niektórych miejscach produkuje
  dużo ifów :P

ENCJE:

- walidacja w encjach, czy czegoś brakuje / coś jest wymagane itp. (@IsNotEmpty itp)

- Rozwiązanie jak przetrzymywać przeczytane/doprzeczytania ksiazki

TODO:

- route - publishers?
- bookGroups - jak przechowywać status książki
- logowanie użytkownika

\*\* z gwiazdką

- TOP BOOKS (route - api/books)

SOONER/LATER:

- SWAGGER

------------> ŻEBY URUCHOMIĆ BAZĘ LOKALNIE <-------------

1. utwórz nową bazę danych w pgAdmin -> nazwę umieść w .env - POSTGRES_DB, albo nazwij ją postgres
2. ustaw user i hasło w .env (domyślnie jest postgres - jeżeli nie to wprowadź swoje),
3. można odpalać projekt i uruchamiać postmana, powinno działać, jeżeli nie a chcesz potestować to pisz :)
