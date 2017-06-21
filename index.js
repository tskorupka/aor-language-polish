module.exports = {
    aor: {
        action: {
            delete: 'Usuń',
            show: 'Pokaż',
            list: 'Lista',
            save: 'Zapisz',
            create: 'Utwórz',
            edit: 'Edytuj',
            cancel: 'Anuluj',
            refresh: 'Odśwież',
            add_filter: 'Dodaj filtr',
            remove_filter: 'Usuń filtr',
        },
        boolean: {
            true: 'Tak',
            false: 'Nie',
        },
        page: {
            list: 'Lista %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Utwórz %{name}',
            delete: 'Usuń %{name} #%{id}',
            dashboard: 'Panel główny',
        },
        input: {
            image: {
                upload_several: 'Upuść pliki tutaj lub naciśnij, aby wysłać.',
                upload_single: 'Upuść plik tutaj lub naciśnij, aby wysłać.',
            },
        },
        message: {
            yes: 'Tak',
            no: 'Nie',
            are_you_sure: 'Czy jesteś pewien?',
            about: 'O',
        },
        navigation: {
            no_results: 'Nie znaleziono',
            page_out_of_boundaries: 'Strona %{page} jest poza limitem',
            page_out_from_end: 'Nie można wyjść poza ostatnią stronę',
            page_out_from_begin: 'Nie można wyjść poza pierwszą stronę',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            next: 'Następny',
            prev: 'Poprzedni',
        },
        auth: {
            username: 'Nazwa użytkownika',
            password: 'Hasło',
            sign_in: 'Zaloguj',
            sign_in_error: 'Autoryzacja nie powiodła się, spróbuj ponownie',
            logout: 'Wyloguj się',
        },
        notification: {
            updated: 'Zaktualizowano pomyślnie',
            created: 'Utworzono pomyślnie',
            deleted: 'Usunięto pomyślnie',
            item_doesnt_exist: 'Element nie istnieje',
            http_error: 'Wystąpił błąd połączenia z serwerem'
        },
        validation: {
            required: 'Wymagane',
            minLength: 'Minimum %{min} znaków',
            maxLength: 'Maksimum %{max} znaków',
            minValue: 'Minimum %{min}',
            maxValue: 'Maksimum %{max}',
            number: 'Musi być numerem',
            email: 'Musi być prawidłowym adresem email',
        },
    },
};
