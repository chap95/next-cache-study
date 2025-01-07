/* eslint-disable @typescript-eslint/no-unused-vars */
// 1. interface 가 상단으로 호이스트 되어야 하면 좋겠음 => 왜냐? TS 는 트랜스파일 되면서 사라지기 때문에
// 2. TS 를 사용하지만 함수의 return 타입이나 형태를 explicit 하게 정해주면 좋다고 생각합니다. => 왜냐? 함수의 동작을 예측하는 것은 되지만 return 을 예측하는 것은 위험한 일이기 때문에
// 3. log 를 찍는 함수를 따로 만들어야 할까?

// activeStatusFlag 가 boolean 보다는 "admin" | "general"
interface UserDetailData {
  fullName: string;
  age: number;
  activeStatusFlag: boolean;
  value: string;
  detailsString: string;
}

// 함수의 동작이 filter 를 하는 함수로 생각이 드는데 input 을 "admin" 과 다른 string 을 구분
// getUserValue -> getUserDataMap
function getUserValue(input: string | number) {
  return input === "admin"
    ? { role: "admin", permissions: ["read", "write"] }
    : null;
}

// handle? -> log : 굳이 함수가 필요할까?
// userData 를 전부 넘겨야 할까?
function handleUserInfo(userData: UserDetailData): void {
  console.log(
    `User: ${userData.fullName}, Status: ${
      userData.activeStatusFlag ? "Active" : "Inactive"
    }`
  );
}

// transform? -> getTransFormUserDataWithTimestampMap
function transformUserData(data: any): object {
  return { transformedData: data, timestamp: new Date() };
}

// configData Record 타입에 무엇이 들어있는지 더 구체적으로 정의 필요
// Object
// identifier -> id
interface ProductInfoObject {
  productName: string;
  productCost: number;
  inStock: boolean;
  configData: Record<string, string>;
  identifier: number | string;
}

// handle? -> log : 함수가 굳이 필요해 보이지 않음
// PRODUCT_CONFIGURATION_LOG_PREFIX = "Product configuration:" 이와 같은 형태의 상수로 빼서 console.log 에 사용하는게 더 좋지 않을까?
function handleProductInfo(config: object) {
  console.log("Product configuration:", config);
}

// getProductCostString
function mapProductData(item: ProductInfoObject): string {
  return `Product: ${item.productName} - Cost: ${item.productCost}`;
}

// 1.1 이라는 수치도 시멘틱하게 상수로 선언하여 사용하면 좋겠습니다.
// getCalculatedPrice
function calculatePricing(details: any): number {
  return details.basePrice ? details.basePrice * 1.1 : 0;
}

// orderDataArray 가 왜 또 있는지?
// misc -> miscellaneous
interface OrderInfo {
  orderId: string;
  totalAmount: number;
  isCompleted: boolean;
  misc: string;
  orderDataArray: Array<OrderInfo>;
}

// process? -> logEachItem
function processOrderItems(items: Array) {
  items.forEach((item) => console.log(`Processing item: ${item}`));
}

// verify? -> is
function verifyOrderCompletion(order: OrderInfo): boolean {
  return order.isCompleted && order.totalAmount > 0;
}

// handle -> log : 굳이 handle 이어야 하는지?
function handleOrderData(data: any): void {
  console.log("Order Data:", data);
}

// Card 든 뭐든 하나로 UI 명칭은 통일이 필요해 보임
const UserProfileCard = ({ userProfile }: { userProfile: UserDetailData }) => (
  <div className="user-profile-card">
    <h3>{userProfile.fullName}</h3>
    <p>{userProfile.activeStatusFlag ? "Active" : "Inactive"}</p>
    <span>Additional Info: {userProfile.value}</span>
  </div>
);

// Display 라는 워딩이 굳이 필요할까?
const ProductInfoDisplay = ({ product }: { product: ProductInfoObject }) => (
  <div className="product-info-display">
    <h3>{product.productName}</h3>
    <p>Price: ${product.productCost}</p>
    <p>Config: {JSON.stringify(product.configData)}</p>
    <span>ID: {product.identifier}</span>
  </div>
);

// Summary 라는 워딩?
const OrderSummary = ({ orderData }: { orderData: OrderInfo }) => (
  <div className="order-summary">
    <h3>Order ID: {orderData.orderId}</h3>
    <p>Total Amount: ${orderData.totalAmount}</p>
    <p>Status: {orderData.isCompleted ? "Completed" : "Pending"}</p>
    <span>Miscellaneous: {JSON.stringify(orderData.misc)}</span>
  </div>
);
