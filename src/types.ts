export type Remittance = {
  order_number: string;
  sender: string;
  sender_address: string;
  sender_city: string;
  receiver: string;
  receiver_address: string;
  receiver_city: string;
  purpose_of_remittance: string;
  sender_bank_account: string;
  receiver_bank_account: string;
  payment_date: string;
  amount: string;
};
