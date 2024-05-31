-- 사용자 데이터 삽입
INSERT INTO users (user_id, username, email, password, icon_url, nickname, name, achievement, score)
VALUES
    (11, 'jhyoo1203', 'jhyoo1203@gmail.com', '$2a$10$jqht8bv0otj6PwqRcPKOjuJR17NhPbb1ATlIAyYXn6JWe1kNm6QWG', 'https://www.acmicpc.net/favicon.ico', 'Reinose', 'John Doe', '워게임:20', 26160),
    (12, 'sechack', 'sechack@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'Sechack', 'Jane Doe', '워게임:10', 15000),
    (13, 'g0riya', 'g0riya@naver.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'G0RiyA', 'Alice Doe', '워게임:5', 10000),
    (14, 'cronus', 'cronus@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'Cronus', 'Bob Doe', '워게임:15', 20000),
    (15, 'ainsetin', 'ainsetin@naver.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'ainsetin', 'Charlie Doe', '워게임:10', 15000),
    (16, 'snwo', 'snwo@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'snwo', 'David Doe', '워게임:5', 10000),
    (17, '2dedce', '2dedce@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', '2dedce', 'Eve Doe', '워게임:10', 15000),
    (18, 'user8', 'user8@naver.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'user8', 'Frank Doe', '워게임:5', 10000),
    (19, 'user9', 'user9@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'user9', 'Grace Doe', '워게임:5', 10000),
    (20, 'user10', 'user10@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://www.acmicpc.net/favicon.ico', 'user10', 'Henry Doe', '워게임:5', 10000);



-- 문제 데이터 삽입
INSERT INTO problems (problem_id, title, level, field, description, problem_url, creator_icon_url, creator_nickname, solutions_count)
VALUES
    (1, 'Problem 1', 2, '리버싱', 'Description of Problem 1', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'Reinose', 3),
    (2, 'Problem 2', 3, '웹 해킹', 'Description of Problem 2', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'Sechack', 2),
    (3, 'Problem 3', 1, '리버싱', 'Description of Problem 3', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'G0RiyA', 1),
    (4, 'Problem 4', 6, '웹 해킹', 'Description of Problem 4', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'Cronus', 2),
    (5, 'Problem 5', 3, '리버싱', 'Description of Problem 5', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'ainsetin', 2),
    (6, 'Problem 6', 7, '웹 해킹', 'Description of Problem 6', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'snwo', 1),
    (7, 'Problem 7', 2, '리버싱', 'Description of Problem 7', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', '2dedce', 1),
    (8, 'Problem 8', 3, '웹 해킹', 'Description of Problem 8', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'user8', 1),
    (9, 'Problem 9', 9, '리버싱', 'Description of Problem 9', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'user9', 1),
    (10, 'Problem 10', 2, '웹 해킹', 'Description of Problem 10', 'https://www.acmicpc.net/favicon.ico', 'https://www.acmicpc.net/favicon.ico', 'user10', 1);

-- 문제 풀이 데이터 삽입
INSERT INTO solutions (solution_id, problem_id, user_id, date_submitted, solution_text)
VALUES
    (1, 1, 11, '2024-05-14', 'Solution to Problem 1 by User 1'),
    (2, 1, 12, '2024-05-15', 'Solution to Problem 1 by User 2'),
    (3, 1, 13, '2024-05-16', 'Solution to Problem 1 by User 3'),
    (4, 2, 11, '2024-05-14', 'Solution to Problem 2 by User 1'),
    (5, 2, 12, '2024-05-15', 'Solution to Problem 2 by User 2'),
    (6, 3, 13, '2024-05-16', 'Solution to Problem 3 by User 3'),
    (7, 4, 14, '2024-05-14', 'Solution to Problem 4 by User 4'),
    (8, 4, 15, '2024-05-15', 'Solution to Problem 4 by User 5'),
    (9, 5, 16, '2024-05-16', 'Solution to Problem 5 by User 6'),
    (10, 5, 17, '2024-05-14', 'Solution to Problem 5 by User 7'),
    (11, 6, 18, '2024-05-15', 'Solution to Problem 6 by User 8'),
    (12, 7, 19, '2024-05-16', 'Solution to Problem 7 by User 9'),
    (13, 8, 20, '2024-05-14', 'Solution to Problem 8 by User 10'),
    (14, 9, 11, '2024-05-15', 'Solution to Problem 9 by User 1'),
    (15, 10, 12, '2024-05-16', 'Solution to Problem 10 by User 2');
