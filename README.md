# To-Do-List 프로젝트

React와 TypeScript를 사용하여 개발한 [To-Do-List](//skagn4929.github.io/React-ts-todolist/) 웹 애플리케이션입니다.

## 1. 프로젝트 동기
리액트에서 타입스크립트를 사용하는 방법에 대한 이해와 간단한 프로젝트를 통해 실제 코딩 능력의 향상을 도모.

## 2. 프로젝트 기능
- 할 일 추가
- 할 일 삭제
- 할 일 수정
- 로컬 스토리지에 할 일 저장 & 불러오기 & 초기화

## 3. 프로젝트 사용법
1. 웹 브라우저에서 [To-Do-List](//skagn4929.github.io/React-ts-todolist/)를 엽니다.
2. 할 일을 입력하고 "추가" 버튼을 클릭하여 할 일을 추가합니다.
3. 추가된 할 일 목록에서 "삭제" 버튼을 클릭하여 할 일을 삭제합니다.
4. "수정" 버튼을 클릭하여 할 일을 수정할 수 있습니다.
5. "로컬스토리지 저장" 버튼을 클릭하여 현재 할 일 목록을 로컬 스토리지에 저장합니다.
6. "로컬스토리지 불러오기" 버튼을 클릭하여 저장된 할 일 목록을 불러옵니다.
7. "로컬스토리지 초기화" 버튼을 클릭하여 저장된 할 일 목록을 초기화합니다.

## 4. 컴포넌트 상세 내용
### ※ App 컴포넌트

State   

- **todoList: string[]** - 초기 할 일 목록을 관리합니다.   

Render   

- **TodoBoard** 컴포넌트를 렌더링하며 초기 할 일 목록을 전달합니다.

---
### ※ TodoBoard 컴포넌트

Props   

- **todoList: string[]** - 초기 할 일 목록을 받습니다.   

State

- **todos: string[]** - 현재의 할 일 목록을 관리합니다.
- **inputValue: string** - 입력 필드의 값을 저장합니다.
- **updateValue: string** - 수정 입력 필드의 값을 저장합니다.
- **visibleUpdateIndex: number | null** - 수정 입력 필드의 가시성을 관리합니다.

Methods   

- **handleAdd()** : 입력 필드에 값이 있을 경우, 새로운 할 일을 추가합니다.
- **handleDelete(index: number)** : 주어진 인덱스에 해당하는 할 일을 삭제합니다.
- **handleUpdate(index: number)** : 주어진 인덱스에 해당하는 할 일을 수정합니다.
- **getLocalStorage()** : 로컬 스토리지에서 할 일 목록을 불러옵니다.
- **saveLocalStorage()** : 현재의 할 일 목록을 로컬 스토리지에 저장합니다.
- **resetLocalStorage()** : 로컬 스토리지의 할 일 목록을 초기화합니다.

Render   

- 입력 필드, 추가 버튼, 할 일 목록, 로컬 스토리지 관련 버튼 등으로 구성된 화면을 렌더링합니다.

---
### ※ TodoItem 컴포넌트

Props   

- **item: string** - 할 일 항목의 내용을 받습니다.
- **onDelete: () => void** - 할 일 삭제를 처리하는 콜백 함수를 받습니다.
- **handleUpdate: () => void** - 할 일 수정을 처리하는 콜백 함수를 받습니다.
- **updateValue: string** - 수정 입력 필드의 값을 받습니다.
- **setUpdateValue: React.Dispatch<React.SetStateAction<string>>** - 수정 입력 필드의 값을 업데이트하는 함수를 받습니다.
- **isUpdateVisible: boolean** - 수정 입력 필드의 가시성 여부를 받습니다.
- **setIsUpdateVisible: React.Dispatch<React.SetStateAction<boolean>>** - 수정 입력 필드의 가시성을 업데이트하는 함수를 받습니다.

Render   

- 할 일 항목, 삭제 버튼, 수정 버튼, 수정 입력 필드 등으로 구성된 화면을 렌더링합니다.   
- 수정 버튼을 누를 시 수정 입력 필드가 나타나며, 이후 확인 버튼을 누르면 수정이 완료됩니다.
