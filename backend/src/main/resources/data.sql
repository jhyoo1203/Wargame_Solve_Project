-- 사용자 데이터 삽입
INSERT INTO users (user_id, icon_url, nickname, name, achievement, score)
VALUES
    (1, 'https://www.acmicpc.net/favicon.ico', 'Reinose', 'John Doe', '워게임:20', 26160),
    (2, 'https://www.acmicpc.net/favicon.ico', 'Sechack', 'Jane Smith', 'CTF First Place', 22973),
    (3, 'https://www.acmicpc.net/favicon.ico', 'G0RiyA', 'Alice Johnson', 'CTF First Place', 24659),
    (4, 'https://www.acmicpc.net/favicon.ico', 'Cronus', 'Bob Brown', '워게임 고인물', 20391),
    (5, 'https://www.acmicpc.net/favicon.ico', 'ainsetin', 'Charlie Wilson', 'Dreamhack Beta CTF 2위', 24621),
    (6, 'https://www.acmicpc.net/favicon.ico', 'snwo', 'David Lee', 'Open Beta Tester', 22438),
    (7, 'https://www.acmicpc.net/favicon.ico', '2dedce', 'Eva Garcia', '워게임 고인물', 19779),
    (8, 'https://www.acmicpc.net/favicon.ico', 'user8', 'Fiona Martinez', '워게임 고인물', 13532),
    (9, 'https://www.acmicpc.net/favicon.ico', 'user9', 'George Clark', 'Open Beta Tester', 25341),
    (10, 'https://www.acmicpc.net/favicon.ico', 'user10', 'Hannah Rodriguez', 'Open Beta Tester', 37214);

-- 문제 데이터 삽입
INSERT INTO problems (problem_id, level, title, field, creator_icon_url, creator_nickname, solutions_count)
VALUES
    (1, 1, 'Problem 1', 'Programming', 'https://www.acmicpc.net/favicon.ico', 'creator1', 3),
    (2, 3, 'Problem 2', 'Mathematics', 'https://www.acmicpc.net/favicon.ico', 'creator2', 2),
    (3, 4, 'Problem 3', 'Data Structures', 'https://www.acmicpc.net/favicon.ico', 'creator3', 1),
    (4, 9, 'Problem 4', 'Physics', 'https://www.acmicpc.net/favicon.ico', 'creator4', 5),
    (5, 3, 'Problem 5', 'Chemistry', 'https://www.acmicpc.net/favicon.ico', 'creator5', 4),
    (6, 5, 'Problem 6', 'Biology', 'https://www.acmicpc.net/favicon.ico', 'creator6', 2),
    (7, 8, 'Problem 7', 'Geography', 'https://www.acmicpc.net/favicon.ico', 'creator7', 3),
    (8, 2, 'Problem 8', 'History', 'https://www.acmicpc.net/favicon.ico', 'creator8', 2),
    (9, 1, 'Problem 9', 'Literature', 'https://www.acmicpc.net/favicon.ico', 'creator9', 1),
    (10, 2, 'Problem 10', 'Art', 'https://www.acmicpc.net/favicon.ico', 'creator10', 4);

-- 문제 풀이 데이터 삽입
INSERT INTO solutions (solution_id, problem_id, user_id, date_submitted, solution_text)
VALUES
    (1, 1, 1, '2024-05-14', 'Solution to Problem 1 by User 1'),
    (2, 1, 2, '2024-05-15', 'Solution to Problem 1 by User 2'),
    (3, 1, 3, '2024-05-16', 'Solution to Problem 1 by User 3'),
    (4, 2, 1, '2024-05-14', 'Solution to Problem 2 by User 1'),
    (5, 2, 2, '2024-05-15', 'Solution to Problem 2 by User 2'),
    (6, 3, 3, '2024-05-16', 'Solution to Problem 3 by User 3'),
    (7, 4, 4, '2024-05-14', 'Solution to Problem 4 by User 4'),
    (8, 4, 5, '2024-05-15', 'Solution to Problem 4 by User 5'),
    (9, 5, 6, '2024-05-16', 'Solution to Problem 5 by User 6'),
    (10, 5, 7, '2024-05-14', 'Solution to Problem 5 by User 7'),
    (11, 6, 8, '2024-05-15', 'Solution to Problem 6 by User 8'),
    (12, 7, 9, '2024-05-16', 'Solution to Problem 7 by User 9'),
    (13, 8, 10, '2024-05-14', 'Solution to Problem 8 by User 10'),
    (14, 9, 1, '2024-05-15', 'Solution to Problem 9 by User 1'),
    (15, 10, 2, '2024-05-16', 'Solution to Problem 10 by User 2');
