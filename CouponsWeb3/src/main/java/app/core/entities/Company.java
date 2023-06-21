package app.core.entities;

import java.util.ArrayList;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = { "id" })
@ToString(exclude = { "coupons" })
@Entity
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(unique = true, nullable = false)
	private String name;
	private String email;

	@Column(length = 4)
	private String password;
	private String logoImage;

	@OneToMany(mappedBy = "company",

			cascade = { CascadeType.DETACH, 
						
						CascadeType.MERGE, 
						
						CascadeType.PERSIST, 

						CascadeType.REMOVE, 
						
						CascadeType.REFRESH }) 
	@JsonIgnore
	private List<Coupon> coupons;

	public void addCoupon(Coupon coupon) {
		if (this.coupons == null) {
			this.coupons = new ArrayList<>();
		}
		coupon.setCompany(this);
		coupons.add(coupon);

	}

}
