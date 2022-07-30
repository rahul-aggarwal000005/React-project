import React from "react";
import { categoryList, ratingList } from "../../../constants";
import CheckboxProton from "../../common/CheckboxProton";
import FilterListToggle from "../../common/FilterListToggle";
import SliderProton from "../../common/SliderProton";
import "./styles.css";

const FilterPanel = ({
	selectedRating,
	selectedPrice,
	selectRating,
	types,
	changeChecked,
	changePrice,
}) => (
	<div>
		<div className="input-group">
			<p className="label">Property Types</p>
			{types.map((type) => (
				<CheckboxProton
					key={type.id}
					type={type}
					changeChecked={changeChecked}
				/>
			))}
		</div>
		<div className="input-group">
			<p className="label-range">Price Range</p>
			<SliderProton value={selectedPrice} changePrice={changePrice} />
		</div>
		<div className="input-group">
			<p className="label">Star Rating</p>
			<FilterListToggle
				options={ratingList}
				value={selectedRating}
				selectToggle={selectRating}
			/>
		</div>
	</div>
);

export default FilterPanel;
