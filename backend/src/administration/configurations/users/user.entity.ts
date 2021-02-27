import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { Product } from "../../product-registrations/products/product.entity";
import { ProductCategory } from "../../product-registrations/product-categories/product-category.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserPasswordDto } from "./dto/update-user-password.dto";
import { ProductProperty } from "../../product-registrations/product-properties/product-property.entity";
import { ProductPropertyValue } from "../../product-registrations/product-properties-values/product-property-value.entity";
import { Stock } from "../../stock-management/stocks/stock.entity";
import { StockItem } from "../../stock-management/stock-items/stock-item.entity";
import { StockItemStatus } from "../../stock-management/stock-item-status/stock-item-status.entity";
import { StockItemCategory } from "../../stock-management/stock-item-categories/stock-item-category.entity";
import { StockItemCategoryImage } from "../../stock-management/stock-item-categories-images/stock-item-category-image.entity";
import { StockItemCategoryProperty } from "../../stock-management/stock-item-categories-properties/stock-item-category-property.entity";
import { StockMovement } from "../../stock-management/stock-movements/stock-movement.entity";
import { StockMovementType } from "../../stock-management/stock-movement-types/stock-movement-type.entity";
import { StockMovementDetail } from "../../stock-management/stock-movement-details/stock-movement-detail.entity";
import { StockInputMovementAction } from "../../stock-management/stock-input-movement-actions/stock-input-movement-action.entity";
import { StockOutputMovementAction } from "../../stock-management/stock-output-movement-actions/stock-output-movement-action.entity";
import { Person } from "../../../website/person-registrations/persons/person.entity";
import { PersonAddress } from "../../../website/person-registrations/person-addresses/person-address.entity";
import { ProductCategoryGroup } from "../../product-registrations/product-category-groups/product-category-group.entity";
import { ProductCategoryGroupProductCategory } from "../../product-registrations/product-category-groups-product-categories/product-category-group-product-category.entity";

import * as bcrypt from 'bcrypt';
import * as crypto from "crypto";
import { ProductDetail } from "../../product-registrations/product-details/product-detail.entity";
import { ProductDetailProduct } from "../../product-registrations/product-details-products/product-detail-product.entity";
import { CartItem } from "../../../website/sales-management/cart-items/cart-item.entity";
import { StockItemCategoryMeasurement } from "../../stock-management/stock-item-categories-measurements/stock-item-category-measurement.entity";
import { Packaging } from "../../product-registrations/packaging/packaging.entity";
import { ShippingConfiguration } from "../shipping-configurations/shipping-configuration.entity";
import { ShippingWay } from "../shipping-ways/shipping-way.entity";

const { v4: uuidv4 } = require('uuid');

@Entity()
@Unique(['username', 'email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column({ nullable: true })
    confirmationToken: string;

    @Column({ nullable: true })
    recoverToken: string;

    @Column({ nullable: true })
    image: string;

    @Column()
    active: boolean;

    @Column({ nullable: true })
    isDefault: boolean;

    @Column()
    isAdministrator: boolean;

    @Column()
    insertionDateTime: Date;

    @OneToMany(type => Product, product => product.user, { eager: false })
    products: Product[];
    
    @OneToMany(type => ProductDetail, productDetail => productDetail.user, { eager: false })
    productDetails: ProductDetail[];
    
    @OneToMany(type => ProductDetailProduct, productDetailProduct => productDetailProduct.user, { eager: false })
    productDetailsProducts: ProductDetailProduct[];

    @OneToMany(type => ProductCategory, productCategory => productCategory.user, { eager: false })
    productCategories: ProductCategory[];

    @OneToMany(type => ProductCategoryGroup, productCategoryGroup => productCategoryGroup.user, { eager: false })
    productCategoryGroups: ProductCategoryGroup[];

    @OneToMany(type => ProductCategoryGroupProductCategory, productCategoryGroupProductCategory => productCategoryGroupProductCategory.user, { eager: false })
    productCategoryGroupsProductCategories: ProductCategoryGroupProductCategory[];

    @OneToMany(type => ProductProperty, prouctProperty => prouctProperty.user, { eager: false })
    productProperties: ProductProperty[];

    @OneToMany(type => ProductPropertyValue, prouctPropertyValue => prouctPropertyValue.user, { eager: false })
    productPropertiesValues: ProductPropertyValue[];

    @OneToMany(type => Packaging, packaging => packaging.user, { eager: false })
    packing: Packaging[];

    @OneToMany(type => Stock, stock => stock.user, { eager: false })
    stocks: Stock[];

    @OneToMany(type => StockItem, stockItem => stockItem.user, { eager: false })
    stockItems: StockItem[];

    @OneToMany(type => StockItemCategory, stockItemCategory => stockItemCategory.user, { eager: false })
    stockItemCategories: StockItemCategory[];

    @OneToMany(type => StockItemCategoryImage, stockItemCategoryImage => stockItemCategoryImage.user, { eager: false })
    stockItemCategoryImages: StockItemCategoryImage[];

    @OneToMany(type => StockItemCategoryProperty, stockItemCategoryProperty => stockItemCategoryProperty.user, { eager: false })
    stockItemCategoryProperties: StockItemCategoryProperty[];

    @OneToMany(type => StockItemCategoryProperty, stockItemCategoryProperty => stockItemCategoryProperty.user, { eager: false })
    stockItemCategoryMeasurements: StockItemCategoryMeasurement[];

    @OneToMany(type => StockItemStatus, stockItemStatus => stockItemStatus.user, { eager: false })
    stockItemStatus: StockItemStatus[];

    @OneToMany(type => StockMovement, stockMovement => stockMovement.user, { eager: false })
    stockMovements: StockMovement[];

    @OneToMany(type => StockMovementType, stockMovementType => stockMovementType.user, { eager: false })
    stockMovementTypes: StockMovementType[];

    @OneToMany(type => StockMovementDetail, stockMovementDetail => stockMovementDetail.user, { eager: false })
    stockMovementDetails: StockMovementDetail[];

    @OneToMany(type => StockInputMovementAction, stockInputMovementAction => stockInputMovementAction.user, { eager: false })
    stockInputMovementActions: StockInputMovementAction[];

    @OneToMany(type => StockOutputMovementAction, stockOutputMovementAction => stockOutputMovementAction.user, { eager: false })
    stockOutputMovementActions: StockOutputMovementAction[];

    @OneToMany(type => Person, person => person.user, { eager: false })
    persons: Person[];

    @OneToMany(type => PersonAddress, personAddress => personAddress.user, { eager: false })
    personAddresses: PersonAddress[];

    @OneToMany(type => CartItem, cartItem => cartItem.user, { eager: false })
    cartItems: CartItem[];

    @OneToMany(type => ShippingWay, shippingWay => shippingWay.user, { eager: false})
    shippingWays: ShippingWay[];

    @OneToMany(type => ShippingConfiguration, shippingConfiguration => shippingConfiguration.user, { eager: false})
    shippingConfigurations: ShippingConfiguration[];

    async validatePassword(password: string): Promise<boolean> {
        return this.password === (await bcrypt.hash(password, this.salt));
    }

    static async fromCreateDto(props: CreateUserDto): Promise<User> {
        let user: User = new User;

        Object.assign(user, props);
        user.id = uuidv4();
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(user.password, user.salt);
        user.confirmationToken = crypto.randomBytes(32).toString('hex');
        user.insertionDateTime = new Date();

        return user;
    }

    static fromUpdateUserDto(props: UpdateUserDto): User {
        let user: User = new User;

        Object.assign(user, props);

        return user;
    }

    static async fromUpdateUserPasswordDto(user: User, password: string): Promise<User> {
        user.recoverToken = null;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        return user;
    }

    static async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }
}