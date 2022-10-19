# front_220220

---
## git clone 처리방법
1. [github.com](https://github.com) 에서 계정 생성
2. `new repository`을 이용하여 새로운 저장소 생성
3. 사용할 폴더위치에서 `git-bash`를 이용하여 
    ``` shell
     $ git clone [repository url]
    ```
4. 이후 새로운 문서를 생성, 기존문서 수정/삭제 후
5. 해당 data를 git에 올리기 위해
6. add , commit , push를 이용
    ``` shell
    $ git add [첨부할 data]
    $ git commit -m "[설명]"
    $ git push
    ```
---



## 과제 : 
> git생성부터, clone, (add, commit, push) * 10, repository자체 삭제 - 5회이상 실행해보기







## 내가 정리한 사용법 :
처음 github 사용 할 때
1. git 설치
2. 설치 완료 후 git bash 열기
3. git bash에서 환경설정 하기
3-1. git config --global user.name "sangjin Park"
3-2. git config --global user.email "sahatk@naver.com"
4. git config --list

// git 불러오기
5. git clone https://github.com/sahatk/front_220220_main.git

-----------------------------------------------------------------------------------------------------------------------------
github에 처음 코드 업로드하기

1. 초기화
git init

2. 추가할 파일 더하기
git add . (add 다음 띄어쓰기하고 . 주의!!)

3.상태 확인(선택사항)
git status

4. 히스토리 만들기 
git commit -m "first commit"

5. Github repository랑 내 로컬 프로젝트랑 연결
git remote add origin https://github.com/sahatk/front_220220_main.git

6. 잘 연결됬는데 확인(선택사항)
git remote -v

7. Github홈페이지에 올리기
git push origin main

-----------------------------------------------------------------------------------------------------------------------------

추가할 떄
1. git add .
2. git status
3. git commit -m "first commit"
4. git push origin main

