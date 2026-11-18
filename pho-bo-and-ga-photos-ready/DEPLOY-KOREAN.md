# Pho Bo And Ga 웹사이트 배포 안내 (코딩 불필요)

## 1. GitHub에 파일 올리기
1. github.com에서 가입/로그인
2. 오른쪽 위 + → New repository
3. Repository name: pho-bo-and-ga, Public 또는 Private 선택, Create repository
4. uploading an existing file 클릭 (없으면 Add file → Upload files)
5. 압축을 푼 이 폴더 **안의 모든 파일과 폴더**를 드래그해 업로드 (폴더 자체가 아닌 내부 내용)
6. Commit changes 클릭

## 2. Vercel 배포
1. vercel.com에서 GitHub로 로그인
2. Add New → Project → GitHub 저장소 pho-bo-and-ga Import
3. Framework Preset: Next.js, Root Directory: ./ 확인
4. Deploy 클릭
5. 배포 완료 후 표시된 주소로 접속

## 3. 확인
- Pickup → Toast 링크
- Delivery → Uber Eats / DoorDash / Grubhub 링크
- 스마트폰 메뉴/레이아웃
- 사진은 아직 이모지 자리표시자이며 메뉴도 최종 검수가 필요함
- 실제 결제는 Toast 및 배달 플랫폼에서 진행됨

## 4. 추후 수정
GitHub에 파일을 수정하여 업로드하면 Vercel이 자동으로 재배포합니다.
