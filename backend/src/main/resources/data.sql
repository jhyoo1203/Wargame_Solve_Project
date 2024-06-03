-- 사용자 데이터 삽입
INSERT INTO users (user_id, username, email, password, icon_url, nickname, name, achievement, score)
VALUES
    (11, 'jhyoo1203', 'jhyoo1203@gmail.com', '$2a$10$jqht8bv0otj6PwqRcPKOjuJR17NhPbb1ATlIAyYXn6JWe1kNm6QWG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'Reinose', 'John Doe', '워게임:20', 26160),
    (12, 'sechack', 'sechack@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'Sechack', 'Jane Doe', '워게임:10', 15000),
    (13, 'g0riya', 'g0riya@naver.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'G0RiyA', 'Alice Doe', '워게임:5', 10000),
    (14, 'cronus', 'cronus@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'Cronus', 'Bob Doe', '워게임:15', 20000),
    (15, 'ainsetin', 'ainsetin@naver.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'ainsetin', 'Charlie Doe', '워게임:10', 15000),
    (16, 'snwo', 'snwo@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'snwo', 'David Doe', '워게임:5', 10000),
    (17, '2dedce', '2dedce@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', '2dedce', 'Eve Doe', '워게임:10', 15000),
    (18, 'user8', 'user8@naver.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'user8', 'Frank Doe', '워게임:5', 10000),
    (19, 'user9', 'user9@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'user9', 'Grace Doe', '워게임:5', 10000),
    (20, 'user10', 'user10@gmail.com', '$2b$12$KixBf2rrdWJai1b3/zSYUeEZ0PbsJbZp1Eeq1S1F1j1e7Zn12F/eG', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'user10', 'Henry Doe', '워게임:5', 10000);



-- 문제 데이터 삽입
INSERT INTO problems (problem_id, title, level, field, description, problem_url, creator_icon_url, creator_nickname, solutions_count)
VALUES
    (11, 'Problem 1', 2, '리버싱', 'Description of Problem 1', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'Reinose', 3),
    (12, 'Problem 2', 3, '웹 해킹', 'Description of Problem 2', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'Sechack', 2),
    (13, 'Problem 3', 1, '리버싱', 'Description of Problem 3', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'G0RiyA', 1),
    (14, 'Problem 4', 6, '웹 해킹', 'Description of Problem 4', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'Cronus', 2),
    (15, 'Problem 5', 3, '리버싱', 'Description of Problem 5', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'ainsetin', 2),
    (16, 'Problem 6', 7, '웹 해킹', 'Description of Problem 6', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'snwo', 1),
    (17, 'Problem 7', 2, '리버싱', 'Description of Problem 7', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', '2dedce', 1),
    (18, 'Problem 8', 3, '웹 해킹', 'Description of Problem 8', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'user8', 1),
    (19, 'Problem 9', 9, '리버싱', 'Description of Problem 9', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'user9', 1),
    (20, 'Problem 10', 2, '웹 해킹', 'Description of Problem 10', 'https://www.acmicpc.net/favicon.ico', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png', 'user10', 1);

-- 문제 풀이 데이터 삽입
INSERT INTO solutions (solution_id, problem_id, user_id, date_submitted, solution_text)
VALUES
    (1, 11, 11, '2024-05-14', 'Solution to Problem 1 by User 1'),
    (2, 11, 12, '2024-05-15', 'Solution to Problem 1 by User 2'),
    (3, 11, 13, '2024-05-16', 'Solution to Problem 1 by User 3'),
    (4, 12, 11, '2024-05-14', 'Solution to Problem 2 by User 1'),
    (5, 12, 12, '2024-05-15', 'Solution to Problem 2 by User 2'),
    (6, 13, 13, '2024-05-16', 'Solution to Problem 3 by User 3'),
    (7, 14, 14, '2024-05-14', 'Solution to Problem 4 by User 4'),
    (8, 14, 15, '2024-05-15', 'Solution to Problem 4 by User 5'),
    (9, 15, 16, '2024-05-16', 'Solution to Problem 5 by User 6'),
    (10, 15, 17, '2024-05-14', 'Solution to Problem 5 by User 7'),
    (11, 16, 18, '2024-05-15', 'Solution to Problem 6 by User 8'),
    (12, 17, 19, '2024-05-16', 'Solution to Problem 7 by User 9'),
    (13, 18, 20, '2024-05-14', 'Solution to Problem 8 by User 10'),
    (14, 19, 11, '2024-05-15', 'Solution to Problem 9 by User 1'),
    (15, 20, 12, '2024-05-16', 'Solution to Problem 10 by User 2');
