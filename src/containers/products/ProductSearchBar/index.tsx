import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
	filterId: string;
	filterText: string;
	inStockOnly: boolean;
	onFilterTextChange: (text: string) => void;
	onFilterIdChange: (id: string) => void;
	onInStockChange: (inStock: boolean) => void;
}

const ProductSearchBar: React.FC<Props> = (props: Props) => {
	const {
		filterId, filterText, inStockOnly, onFilterTextChange, onInStockChange,onFilterIdChange
	} = props;

	function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextChange(e.target.value.toString());
	}
	function handleFilterIdChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterIdChange(e.target.value.toString());
	}

	function handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value: boolean = e.target.checked as any as boolean;
		onInStockChange(value);
	}


	return (
		<Form>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search..."
					value={filterText}
					onChange={handleFilterTextChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search..."
					value={filterId}
					onChange={handleFilterIdChange}
				/>
			</Form.Group>


			<Form.Group>
				<Form.Check
					label="Only show products in stock"
					checked={inStockOnly}
					onChange={handleInStockChange}
				/>
			</Form.Group>
		</Form>
	);
};

export default ProductSearchBar;
